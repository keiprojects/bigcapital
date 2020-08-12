import authentication from './authentication/authentication.types';
import accounts from './accounts/accounts.types';
import accounting from './manualJournals/manualJournals.types';
import currencies from './currencies/currencies.types';
import customFields from './customFields/customFields.types';
import customViews from './customViews/customViews.types';
import dashboard from './dashboard/dashboard.types';
import expenses from './expenses/expenses.types';
import items from './items/items.types';
import preferences from './preferences/preferences.types';
import resources from './resources/resource.types';
import users from './users/users.types';
import financialStatements from './financialStatement/financialStatements.types';
import itemCategories from './itemCategories/itemsCategory.type';
import settings from './settings/settings.type';
import search from './search/search.type';
import register from './registers/register.type';
import exchangeRate from './ExchangeRate/exchange.type';
import customer from './customers/customers.type';
import estimates from './Estimate/estimates.types';
import invoices from './Invoice/invoices.types';
import receipts from './receipt/receipt.type';
import bills from './Bills/bills.type';
import paymentReceives from './PaymentReceive/paymentReceive.type';
import vendors from './vendors/vendors.types';

export default {
  ...authentication,
  ...accounts,
  ...currencies,
  ...customFields,
  ...customViews,
  ...dashboard,
  ...expenses,
  ...items,
  ...preferences,
  ...resources,
  ...users,
  ...financialStatements,
  ...itemCategories,
  ...settings,
  ...accounting,
  ...search,
  ...register,
  ...exchangeRate,
  ...customer,
  ...estimates,
  ...invoices,
  ...receipts,
  ...bills,
  ...paymentReceives,
  ...vendors,
};
