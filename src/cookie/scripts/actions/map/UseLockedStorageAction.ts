import Account from "@account";
import ScriptAction, { ScriptActionResults } from "../ScriptAction";

export default class UseLockedStorageAction extends ScriptAction {
  public elementCellId: number;
  public lockCode: string;

  constructor(elementCellId: number, lockCode: string) {
    super();
    this.elementCellId = elementCellId;
    this.lockCode = lockCode;
  }

  public async process(account: Account): Promise<ScriptActionResults> {
    if (account.game.managers.interactives.useLockedStorage(this.elementCellId, this.lockCode)) {
      return ScriptAction.processingResult();
    }
    account.scripts.stopScript("Error while using a locked storage.");
    return ScriptAction.failedResult();
  }
}