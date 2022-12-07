// Code generated by wunderctl. DO NOT EDIT.

export interface AddTweetInput {
	id: string;
	displayName: string;
	username: string;
	verified: boolean;
	text: string;
	avatar?: JSONValue;
	image?: JSONValue;
	date: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface InternalAddTweetInput {
	id: string;
	displayName: string;
	username: string;
	verified: boolean;
	text: string;
	avatar?: JSONValue;
	image?: JSONValue;
	date: string;
}

export interface InjectedAddTweetInput {
	id: string;
	displayName: string;
	username: string;
	verified: boolean;
	text: string;
	avatar?: JSONValue;
	image?: JSONValue;
	date: string;
}

export interface AddTweetResponse {
	data?: AddTweetResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetTweetsResponse {
	data?: GetTweetsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface AddTweetResponseData {
	tweets_createOnetweets?: {
		id: string;
		displayName: string;
		username: string;
		verified: boolean;
		text: string;
		avatar?: JSONValue;
		image?: JSONValue;
		date: string;
	};
}

export interface GetTweetsResponseData {
	tweets_findManytweets: {
		id: string;
		displayName: string;
		username: string;
		verified: boolean;
		text: string;
		avatar?: JSONValue;
		image?: JSONValue;
		date: string;
	}[];
}
