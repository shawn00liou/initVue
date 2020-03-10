export interface IPaginationRequest {
  PageIndex: number;
  PageSize: number;
  TotalCount?: number;
  // PageCount: number;
  // PageSkip: number;
  // OrderBy: string;
  // ASC: number;
  // SortableColumn?: string[];
}

export enum APICodeEnum {
  /// <summary>未定義</summary>
  Undefined = 0,
  /// <summary>成功</summary>
  Success = 1,
  /// <summary>失敗</summary>
  Fail = 2,
  /// <summary>會員帳號存在</summary>
  // i18n.t('api.code.100')
  // i18n.t('api.code.MemberAccountExist')
  MemberAccountExist = 100,
  /// <summary>會員帳號不存在</summary>
  // i18n.t('api.code.101')
  // i18n.t('api.code.MemberAccountNotExist')
  MemberAccountNotExist = 101,
  /// <summary>會員帳號重複登入</summary>
  // i18n.t('api.code.102')
  // i18n.t('api.code.MemberAccountLoginRepeatedly')
  MemberAccountLoginRepeatedly = 102,
  /// <summary>會員帳號凍結/停用</summary>
  // i18n.t('api.code.103')
  // i18n.t('api.code.MemberAccountFreezeOrDisable')
  MemberAccountFreezeOrDisable = 103,
  /// <summary>驗證碼錯誤</summary>
  // i18n.t('api.code.300')
  // i18n.t('api.code.VerificationCodeError')
  VerificationCodeError = 300
}

export interface IAPIResponseStandard<
  D extends Record<string, any>,
  Data = D & {
    Pagination?: IPaginationRequest;
  }
> {
  Data: Data;
  Code: APICodeEnum;
  Pagination?: IPaginationRequest;
}

export type APIResponse<D extends Record<string, any>> = IAPIResponseStandard<D>;

export function APIMockResponse<T>(Data: T, Code = APICodeEnum.Success): APIResponse<T> {
  return {
    Code,
    Data
  };
}
