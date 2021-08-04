export interface Package {
	help: string,
	success: string,
	result: Result[]
}

export interface Result {
	license_title:            string;
	maintainer:               string;
	relationships_as_object:  any[];
	private:                  boolean;
	maintainer_email:         string;
	num_tags:                 number;
	id:                       string;
	metadata_created:         Date;
	metadata_modified:        Date;
	author:                   string;
	author_email:             string;
	state:                    string;
	version:                  string;
	creator_user_id:          string;
	type:                     string;
	resources:                Resource[];
	num_resources:            number;
	tags:                     Tag[];
	groups:                   Group[];
	license_id:               string;
	relationships_as_subject: any[];
	organization:             Organization;
	name:                     string;
	isopen:                   boolean;
	url:                      string;
	notes:                    string;
	owner_org:                string;
	extras:                   Extra[];
	license_url:              string;
	title:                    string;
	revision_id:              string;
}

export interface Extra {
	key:   string;
	value: string;
}

export interface Group {
	display_name:      string;
	description:       string;
	image_display_url: string;
	title:             string;
	id:                string;
	name:              string;
}

export interface Organization {
	description:     string;
	created:         Date;
	title:           string;
	name:            string;
	is_organization: boolean;
	state:           string;
	image_url:       string;
	revision_id:     string;
	type:            string;
	id:              string;
	approval_status: string;
}

export interface Resource {
	cache_last_updated:                            null;
	package_id:                                    string;
	datastore_contains_all_records_of_source_file: string;
	datastore_active:                              boolean;
	id:                                            string;
	size:                                          number;
	original_url:                                  string;
	resource_id:                                   string;
	set_url_type:                                  string;
	state:                                         string;
	ignore_hash:                                   string;
	hash:                                          string;
	description:                                   string;
	format:                                        string;
	mimetype_inner:                                null;
	url_type:                                      string;
	mimetype:                                      null;
	cache_url:                                     null;
	name:                                          string;
	created:                                       Date;
	url:                                           string;
	ckan_url:                                      string;
	task_created:                                  Date;
	last_modified:                                 Date;
	position:                                      number;
	revision_id:                                   string;
	resource_type:                                 null;
}

export interface Tag {
	vocabulary_id: null;
	state:         string;
	display_name:  string;
	id:            string;
	name:          string;
}

