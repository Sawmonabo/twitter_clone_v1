// Code generated by wunderctl. DO NOT EDIT.

import type { OperationArgsWithInput, InternalClient as BaseClient } from "@wundergraph/sdk";
import {
	AddTweetResponse,
	AddTweetInput,
	InternalAddTweetInput,
	InjectedAddTweetInput,
	GetTweetsResponse,
} from "./models";

export interface Queries {
	GetTweets: () => Promise<GetTweetsResponse>;
}

export interface Mutations {
	AddTweet: (options: OperationArgsWithInput<AddTweetInput>) => Promise<AddTweetResponse>;
}

export interface InternalClient extends BaseClient<Queries, Mutations> {}
