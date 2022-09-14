export {};

export type DateSelect = {
    label: string;
    value: number;
}
export interface ProfitCenterType {
    AccountingName: string;
    ClassID: number;
    CreatedBy: string | null;
    CreatedDateTime: Date | null;
    DateDeactivated: Date | null;
    Inactive: boolean;
    ModifyDate: Date | null;
    ProfitCenterID: number;
    ProfitCenterName: string;
    StateCode: string;
    tblInvoiceAvailableByWeeks: [] | null;
}
export interface InvoiceType {
    AgingReportComment: string | null;
    BillableTickets: number;
    BillingGroupID: number;
    ClearedFlag: boolean | null;
    DateCreated: Date;
    DateIgnoreForAgingUntil: Date | null;
    DateLastModified: Date | null;
    DateSent: Date | null;
    GLDate: Date | null;
    InvoiceAmount: number | null;
    InvoiceDueDate: Date | null;
    InvoiceNumber: string;
    InvoiceProgressID: number;
    IsIgnoredForAging: boolean;
    IsPaid: boolean;
    LastInvoiceAmount: number;
    MiscAmount: number | null;
    ProfitCenterID: number;
    SentToAccountingBySystem: boolean;
    SentToAccountingDate: Date | null;
    SentToAccountingUser: string | null;
    UserCreated: string;
    UserLastModified: string | null;
    WeekEnding: Date;
}
export interface BillingGroupNameType {
    BillingGroupID: number;
    BillingGroupName: string;
}
export interface BillingGroupType {
    AccountingItem: string;
    AgingAddress: string | null;
    AgingCity: string | null;
    AgingContactName: string | null;
    AgingContactPhone: string | null;
    AgingEmailTo: string | null;
    AgingFax: string | null;
    AgingState: string | null;
    AgingTimeZone: string | null;
    AgingWarningAdjustment: number;
    AgingZip: string | null;
    BillingGroupID: number;
    BillingGroupName: string;
    BillingInterval: string | null;
    BillingIntervalID: number;
    ContactName: string | null;
    ContactPhone: string | null;
    ContractID: number;
    CustomerID: number;
    DateDeactivated: Date | null;
    EmailBCC: string | null;
    EmailCC: string | null;
    EmailMessage: string | null;
    EmailSignature: string | null;
    EmailSubject: string | null;
    EmailTo: string | null;
    FlatRateType: number;
    Inactive: boolean;
    InvoiceStorageLocation: string | null;
    InvoiceStoredProcedure: string | null;
    InvoiceTemplateLocation: string | null;
    InvoicingGroup: string | null;
    IsFlatRate: boolean;
    IsTaxable: boolean;
    IsTiered: boolean;
    MailingAddress: string | null;
    MailingCity: string | null;
    MailingName: string | null;
    MailingState: string | null;
    MailingZip: string | null;
    RevenueTypeID: number;
    SpecialInstructions: string | null;
    StateCode: string | null;
}
//** This is missing some items from the interface as I couldn't figure the type easily.  
export interface BillingGroupEditableType {
    AccountingItem: string;
    AgingAddress: string | null;
    AgingContactName: string;
    AgingContactPhone: string;
    AgingEmailTo: string;
    AgingFax: string | null
    AgingState: string | null
    AgingWarningAdjustment: number;
    AgingZip: string | null
    BillingGroupID: number;
    BillingGroupName: string;
    BillingInterval: string
    BillingIntervalID: number;
    ContactName: string | null;
    ContactPhone: string | null;
    ContractID: number;
    CustomerID: number;
    DateDeactivated: Date | null;
    EmailBCC: string | null;
    EmailCC: string | null;
    EmailMessage: string | null;
    EmailSignature: string | null;
    EmailSubject: string | null;
    EmailTo: string | null;
    FlatRateType: number;
    Inactive: boolean;
    InvoiceStorageLocation: string | null;
    InvoiceStoredProcedure: string | null;
    InvoiceTemplateLocation: string | null;
    InvoicingGroup: string | null;
    IsFlatRate: boolean;
    IsTaxable: boolean;
    IsTiered: boolean;
    MailingAddress: string | null;
    MailingCity: string | null;
    MailingName: string | null;
    MailingState: string | null;
    MailingZip: string | null;
    RevenueTypeID: number
    SpecialInstructions: string | null;
    StateCode: string | null;
    tblInvoiceAvailableByWeeks: [];
}
export interface WeeklyInvoiceType {
    BillingGroupID: number;
    InvoiceNumber: string | null;
    ProfitCenterID: number;
    WeekEnding: Date | string;
    tblBillingGroup: null;
    tblInvoiceWeek: Date | string | null;
    tblProfitCenter: string | null;
}
export interface WeekType {
    WeekEnding: Date;
    BelongsToYear: number;
    BelongsToQuarter: number;
    BelongsToMonth: number;
    BelongsToWeek: number;
    EndOfMonth: boolean;
    BiWeekly: boolean;
    BiWeekly2: boolean;
    Annual: boolean;
    WeekBeginning: Date;
}
export interface InvoicePaymentType {
    CheckAmount: number;
    CheckDate: Date;
    CheckNumber: string;
    CreatedBy: string;
    CreatedDate: Date;
    InvoiceNumber: string;
    InvoicePaymentID: number;
    ModifiedBy: string;
    ModifyDate: Date;
    TransactionID: string;
    TransactionType: string;
}