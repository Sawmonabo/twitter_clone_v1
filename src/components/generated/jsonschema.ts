// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import { JSONSchema7 } from "json-schema";

interface Schema {
	AddTweet: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	Tweets: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	AddTweet: {
		input: {
			type: "object",
			properties: { data: { $ref: "#/definitions/tweets_tweetsCreateInput" } },
			additionalProperties: false,
			definitions: {
				tweets_tweetsCreateInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						id: { type: ["string", "null"] },
						avatar: {},
						date: { type: "string" },
						displayName: { type: "string" },
						image: {},
						text: { type: "string" },
						username: { type: "string" },
						verified: { type: "boolean" },
					},
					required: ["date", "displayName", "text", "username", "verified"],
				},
			},
			required: ["data"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						tweets_createOnetweets: {
							type: "object",
							properties: {
								id: { type: "string" },
								displayName: { type: "string" },
								username: { type: "string" },
								verified: { type: "boolean" },
								text: { type: "string" },
								avatar: {},
								image: {},
								date: { type: "string" },
							},
							additionalProperties: false,
							required: ["id", "displayName", "username", "verified", "text", "date"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	Tweets: {
		input: { type: "object", properties: {}, additionalProperties: false, definitions: {} },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						tweets_findManytweets: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									displayName: { type: "string" },
									username: { type: "string" },
									verified: { type: "boolean" },
									text: { type: "string" },
									avatar: {},
									image: {},
									date: { type: "string" },
								},
								additionalProperties: false,
								required: ["id", "displayName", "username", "verified", "text", "date"],
							},
						},
					},
					additionalProperties: false,
					required: ["tweets_findManytweets"],
				},
			},
			additionalProperties: false,
		},
	},
};
export default jsonSchema;
