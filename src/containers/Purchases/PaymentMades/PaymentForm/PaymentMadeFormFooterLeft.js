import React from 'react';
import styled from 'styled-components';
import { FFormGroup, FEditableText, FormattedMessage as T } from 'components';

export function PaymentMadeFormFooterLeft() {
  return (
    <React.Fragment>
      {/* --------- Statement--------- */}
      <StatementFormGroup
        name={'statement'}
        label={<T id={'statement'} />}
        hintText={'Will be displayed on the Payment'}
      >
        <FEditableText
          name={'statement'}
          placeholder={
            <T id={'thanks_for_your_business_and_have_a_great_day'} />
          }
        />
      </StatementFormGroup>
    </React.Fragment>
  );
}
const StatementFormGroup = styled(FFormGroup)`
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
