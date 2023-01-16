export interface AddApplication {
  name:         string;
  description:  string;
  policyNumber: string;
}

export interface Application extends AddApplication {
  id:          number;
}

export interface Company {
  id:          number;
  name:        string;
  applications: Application[];
}
