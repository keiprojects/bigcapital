import React from 'react';
import intl from 'react-intl-universal';
import styled from 'styled-components';
import { FFormGroup, FEditableText, FormattedMessage as T } from 'components';

export function ReceiptFormFooterLeft() {
  return (
    <React.Fragment>
      {/* --------- Receipt message --------- */}
      <ReceiptMsgFormGroup
        name={'receipt_message'}
        label={<T id={'receipt_form.label.receipt_message'} />}
        hintText={'Will be displayed on the Receipt'}
      >
        <FEditableText
          name={'receipt_message'}
          placeholder={intl.get('receipt_form.receipt_message.placeholder')}
        />
      </ReceiptMsgFormGroup>

      {/* --------- Statement--------- */}
      <StatementFormGroup
        label={<T id={'receipt_form.label.statement'} />}
        name={'statement'}
      >
        <FEditableText
          name={'statement'}
          placeholder={intl.get('receipt_form.statement.placeholder')}
        />
      </StatementFormGroup>
    </React.Fragment>
  );
}

const ReceiptMsgFormGroup = styled(FFormGroup)`
  &.bp3-form-group {
    margin-bottom: 40px;

    .bp3-label {
      font-size: 12px;
      margin-bottom: 12px;
    }
    .bp3-form-content {
      margin-left: 10px;
    }
  }
`;

const StatementFormGroup = styled(FFormGroup)`
  &.bp3-form-group {
    .bp3-label {
      font-size: 12px;
      margin-bottom: 12px;
    }
    .bp3-form-content {
      margin-left: 10px;
    }
  }
`;
