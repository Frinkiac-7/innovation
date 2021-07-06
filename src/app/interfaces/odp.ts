export interface Record {
	'Incident Number': string;
	'Incident Type': string;
	ZipCode: string;
	'Date Logged': string;
	Department: string;
	_id: number;
	'Time Logged': string;
	Location: string;
}

export interface Fields {
	_id: number;
	'Incident': string;
	'Date Logged': string;
	'Time Logged': string;
	Department: string;
	'Incident Type': string;
	Location: string;
	ZipCode: string;
}[]

export interface Links {
	start: string;
	next: string;
}

export interface Result {
	'include_total': boolean;
	'resource_id': string;
	fields: Fields;
	records_format: string;
	records: Record[];
	limit: number;
	_links: Links;
	total: number;
}

export interface Odp {
	help: string;
	success: boolean;
	result: Result;
}
