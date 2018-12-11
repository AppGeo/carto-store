import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import { click } from 'ember-semantic-test-helpers/test-support';
import hbs from 'htmlbars-inline-precompile';

interface Data {
  name: string;
}

module('Integration | Component | project-create-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      submit(data: Data) {
        assert.ok(data);
        assert.equal(data.name, 'some name', 'Name passed to submit');
      },
      cancel() {}
    })
    await render(hbs`
      <ProjectCreateModal
        @onCancel={{action this.cancel}}
        @onSubmit={{action this.submit}}
      />
    `);

    await click('Create Project');

    assert.dom('.ember-modal-dialog').includesText('Project Name');
  });
});
