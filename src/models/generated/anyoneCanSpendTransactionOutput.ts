/**
 * Blockchain explorer
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TransactionId } from './transactionId';


export interface AnyoneCanSpendTransactionOutput {
    id: TransactionId;
    /**
     * Amount of Ergo token
     */
    value: number;
    /**
     * The script which should be successfully executed for the waste of this output
     */
    script: string;
}
