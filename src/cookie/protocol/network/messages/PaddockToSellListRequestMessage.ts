import Message from "@/protocol/network/messages/Message";

export default class PaddockToSellListRequestMessage extends Message {
  public pageIndex: number;

  constructor(pageIndex = 0) {
    super();
    this.pageIndex = pageIndex;

  }
}
