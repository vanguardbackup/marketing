/**
 * GitHub API Service
 *
 * This file contains functions for fetching data from the GitHub API.
 * In a production environment, you should handle authentication and rate limiting appropriately.
 */

export interface Contributor {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
}

export interface RepoData {
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    watchers_count: number;
}

// Cache for GitHub API responses
const cache: {
    repoData?: { data: RepoData; timestamp: number };
    contributors?: { data: Contributor[]; timestamp: number };
} = {};

// Cache duration in milliseconds (30 minutes)
const CACHE_DURATION = 1000 * 60 * 30;

/**
 * Fetch repository information from GitHub
 * @param owner - Repository owner
 * @param repo - Repository name
 */
export const fetchRepoData = async (owner: string, repo: string): Promise<RepoData> => {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return await response.json() as RepoData;
    } catch (error) {
        console.error('Error fetching repo data:', error);
        // Return default values as fallback
        return {
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0
        };
    }
};

/**
 * Fetch repository contributors from GitHub
 * @param owner - Repository owner
 * @param repo - Repository name
 * @param limit - Maximum number of contributors to fetch
 */
export const fetchContributors = async (
    owner: string,
    repo: string,
    limit: number = 10
): Promise<Contributor[]> => {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=${limit}`);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return await response.json() as Contributor[];
    } catch (error) {
        console.error('Error fetching contributors:', error);
        return [];
    }
};

/**
 * GitHub service implementation
 * Use this class to fetch GitHub data with appropriate caching
 */
export class GitHubService {
    /**
     * Get repository data with caching
     */
    static async getRepoData(owner: string, repo: string): Promise<RepoData> {
        const now = Date.now();

        // Return cached data if it's still valid
        if (
            cache.repoData &&
            now - cache.repoData.timestamp < CACHE_DURATION
        ) {
            return cache.repoData.data;
        }

        // Fetch fresh data
        const data = await fetchRepoData(owner, repo);

        // Update cache
        cache.repoData = {
            data,
            timestamp: now
        };

        return data;
    }

    /**
     * Get repository contributors with caching
     */
    static async getContributors(
        owner: string,
        repo: string,
        limit: number = 10
    ): Promise<Contributor[]> {
        const now = Date.now();

        // Return cached data if it's still valid
        if (
            cache.contributors &&
            now - cache.contributors.timestamp < CACHE_DURATION
        ) {
            return cache.contributors.data;
        }

        // Fetch fresh data
        const data = await fetchContributors(owner, repo, limit);

        // Update cache
        cache.contributors = {
            data,
            timestamp: now
        };

        return data;
    }
}

export default GitHubService;