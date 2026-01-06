import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Cafe24ProductKeySpecifier = ('createdAt' | 'detailImageUrl' | 'display' | 'engProductName' | 'listImageUrl' | 'pinsCount' | 'price' | 'productCode' | 'productName' | 'productNo' | 'retailPrice' | 'selling' | 'shopNo' | 'smallImageUrl' | 'soldOut' | 'summaryDescription' | 'tinyImageUrl' | 'updatedAt' | Cafe24ProductKeySpecifier)[];
export type Cafe24ProductFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	detailImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	display?: FieldPolicy<any> | FieldReadFunction<any>,
	engProductName?: FieldPolicy<any> | FieldReadFunction<any>,
	listImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	pinsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productCode?: FieldPolicy<any> | FieldReadFunction<any>,
	productName?: FieldPolicy<any> | FieldReadFunction<any>,
	productNo?: FieldPolicy<any> | FieldReadFunction<any>,
	retailPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	selling?: FieldPolicy<any> | FieldReadFunction<any>,
	shopNo?: FieldPolicy<any> | FieldReadFunction<any>,
	smallImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	soldOut?: FieldPolicy<any> | FieldReadFunction<any>,
	summaryDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	tinyImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cafe24ProductsConnectionKeySpecifier = ('edges' | 'pageInfo' | Cafe24ProductsConnectionKeySpecifier)[];
export type Cafe24ProductsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cafe24ProductsConnectionEdgeKeySpecifier = ('cursor' | 'node' | Cafe24ProductsConnectionEdgeKeySpecifier)[];
export type Cafe24ProductsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | ConnectionPageInfoKeySpecifier)[];
export type ConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginSuccessKeySpecifier = ('accessToken' | 'expiresAt' | 'refreshToken' | LoginSuccessKeySpecifier)[];
export type LoginSuccessFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createPin' | 'deletePin' | 'logout' | 'refreshAccessToken' | 'updatePin' | 'upsertPins' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createPin?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePin?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePin?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPins?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinKeySpecifier = ('color' | 'comment' | 'connectingImageUrl' | 'createdAt' | 'displayImageUrl' | 'id' | 'linkUrl' | 'mallId' | 'productNo' | 'size' | 'title' | 'type' | 'updatedAt' | 'xRatio' | 'yRatio' | PinKeySpecifier)[];
export type PinFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	connectingImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	linkUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	mallId?: FieldPolicy<any> | FieldReadFunction<any>,
	productNo?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	xRatio?: FieldPolicy<any> | FieldReadFunction<any>,
	yRatio?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('cafe24AuthenticationUrl' | 'cafe24Product' | 'cafe24ProductsConnection' | 'fileUpload' | 'me' | 'pins' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cafe24AuthenticationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	cafe24Product?: FieldPolicy<any> | FieldReadFunction<any>,
	cafe24ProductsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	fileUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	pins?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadKeySpecifier = ('fileUrl' | 'uploadUrl' | UploadKeySpecifier)[];
export type UploadFieldPolicy = {
	fileUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'deletedAt' | 'id' | 'lastLogin' | 'mallId' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	mallId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Cafe24Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cafe24ProductKeySpecifier | (() => undefined | Cafe24ProductKeySpecifier),
		fields?: Cafe24ProductFieldPolicy,
	},
	Cafe24ProductsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cafe24ProductsConnectionKeySpecifier | (() => undefined | Cafe24ProductsConnectionKeySpecifier),
		fields?: Cafe24ProductsConnectionFieldPolicy,
	},
	Cafe24ProductsConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cafe24ProductsConnectionEdgeKeySpecifier | (() => undefined | Cafe24ProductsConnectionEdgeKeySpecifier),
		fields?: Cafe24ProductsConnectionEdgeFieldPolicy,
	},
	ConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionPageInfoKeySpecifier | (() => undefined | ConnectionPageInfoKeySpecifier),
		fields?: ConnectionPageInfoFieldPolicy,
	},
	LoginSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginSuccessKeySpecifier | (() => undefined | LoginSuccessKeySpecifier),
		fields?: LoginSuccessFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Pin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinKeySpecifier | (() => undefined | PinKeySpecifier),
		fields?: PinFieldPolicy,
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