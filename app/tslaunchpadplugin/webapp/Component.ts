import BaseComponent from 'sap/ui/core/UIComponent';

/**
 * @namespace com.pacg.cssp.tslaunchpadplugin
 */
export default class Component extends BaseComponent {
  public static metadata = {
    manifest: 'json',
  };

  public init(): void {
    super.init();

    console.log('TS plugin component init');
  }
}
