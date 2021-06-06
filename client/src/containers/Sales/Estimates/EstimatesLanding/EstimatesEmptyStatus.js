import React from 'react';
import { Button, Intent } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';
import { EmptyStatus } from 'components';
import { FormattedMessage as T } from 'react-intl';

export default function EstimatesEmptyStatus() {
  const history = useHistory();

  return (
    <EmptyStatus
      title={<T id={'it_s_time_to_send_estimates_to_your_customers'} />}
      description={
        <p>
          <T id={'it_is_a_long_established_fact_that_a_reader'} />
        </p>
      }
      action={
        <>
          <Button
            intent={Intent.PRIMARY}
            large={true}
            onClick={() => {
              history.push('/estimates/new');
            }}
          >
            <T id={'new_sale_estimate'} />
          </Button>
          <Button intent={Intent.NONE} large={true}>
            <T id={'learn_more'} />
          </Button>
        </>
      }
    />
  );
}
