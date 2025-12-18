import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type LoginSuccessKeySpecifier = ('accessToken' | 'expiresAt' | 'refreshToken' | LoginSuccessKeySpecifier)[];
export type LoginSuccessFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('logout' | 'refreshAccessToken' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshAccessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('cafe24AuthenticationUrl' | 'fileUpload' | 'me' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cafe24AuthenticationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	fileUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadKeySpecifier = ('fileUrl' | 'uploadUrl' | UploadKeySpecifier)[];
export type UploadFieldPolicy = {
	fileUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'deletedAt' | 'id' | 'lastLogin' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	LoginSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginSuccessKeySpecifier | (() => undefined | LoginSuccessKeySpecifier),
		fields?: LoginSuccessFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Upload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadKeySpecifier | (() => undefined | UploadKeySpecifier),
		fields?: UploadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;