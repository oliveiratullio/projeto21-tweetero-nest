import { CreateTweetDto } from 'src/dtos/tweet.dto';
import { CreateUserDto } from 'src/dtos/user.dto';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweets.entity';
export declare class AppService {
    private users;
    private tweets;
    constructor();
    getUsers(): User[];
    getUserByUsername(username: string): User;
    createUser(body: CreateUserDto): User;
    createTweet(body: CreateTweetDto): number;
    getAllTweets(): Tweet[];
    getTweetsByUsername(username: string): Tweet[];
    getTweetByPagination(page: number): Tweet[];
}
