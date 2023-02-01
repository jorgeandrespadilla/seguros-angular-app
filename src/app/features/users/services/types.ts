interface Company {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    applications?: any;
    employees?: any;
}

interface Role {
    id: string;
    name: string;
    normalizedName: string;
    concurrencyStamp: string;
}

export interface GetCompaniesRoles {
    companies: Company[];
    roles: Role[];
}

export interface CreateUser {
    username: string;
    password: string;
    companyId?: number;
    roleId: string;
}