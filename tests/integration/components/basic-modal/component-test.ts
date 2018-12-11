import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import { click } from 'ember-semantic-test-helpers/test-support';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | basic-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      close() {
        assert.ok(true, 'cancelled');
      }
    });

    await render(hbs`
      <BasicModal
        @onClose={{action this.close}}
        as |close|
      >
        Test Modal
        <button onclick={{close}}>close</button>
      </BasicModal>
    `);

    await click('close');

    assert.dom('.ember-modal-dialog').includesText('Test Modal');
  });
});
