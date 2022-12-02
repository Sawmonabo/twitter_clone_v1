// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import { JSONSchema7 } from "json-schema";

interface Schema {
	Tweets: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
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
									username: { type: "string" },
									verified: { type: "boolean" },
									text: { type: "string" },
									date: { type: "string" },
								},
								additionalProperties: false,
								required: ["id", "username", "verified", "text", "date"],
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
