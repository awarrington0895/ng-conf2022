import axios from 'axios';
import { GithubRepo } from './github-repo';


export const getRepos = async (username: string) => {
    const response = await axios.get<GithubRepo[]>(`${baseUrl}/users/${username}/repos`);

    return response.data;
}

const baseUrl = 'https://api.github.com';
