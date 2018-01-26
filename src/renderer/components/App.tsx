import GlobalConfiguration from "@/configurations/GlobalConfiguration";
import LanguageManager from "@/configurations/language/LanguageManager";
import BreedsUtility from "@/core/BreedsUtility";
import MapPoint from "@/core/pathfinder/MapPoint";
import InventoryHelper from "@/game/character/inventory/InventoryHelper";
import DTConstants from "@protocol/DTConstants";
import * as React from "react";
import Main from "./Main";

export class App extends React.Component<{}, {}> {

  constructor(props: {}) {
    super(props);

    (global as any).API = new Array();

    GlobalConfiguration.load();
    LanguageManager.Init();
    DTConstants.Init().then(async () => {
      await BreedsUtility.Init();
      MapPoint.Init();
      InventoryHelper.Init();
    });
  }

  public render() {
    return <Main />;
  }
}
