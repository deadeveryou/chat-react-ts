// 定义 State 结构类型
export type StoreState = {
  token: string;
  refreshToken: string;
  userID: string;
  // 用户头像
  profilePicture: string;
  username: string;
  // 在线人数
  onlineUsers: number;
  currentComponentName: null;
  socket: {
    // 连接状态
    isConnected: Boolean;
    // 消息内容
    message: string;
    // 重新连接错误
    reconnectError: Boolean;
    // 心跳消息发送时间
    heartBeatInterval: number;
    // 心跳定时器
    heartBeatTimer: number;
  };
  // 右键菜单
  rightMenu: {
    status: string;
    top: string;
    left: string;
    list: any[];
  };
  // 关闭添加好友信息弹出框
  closeFriendAllAlert: Boolean;
  // 关闭好友验证弹出框
  closeFriendCheckedAlert: Boolean;
  // 关闭分组管理弹框
  closeManageGroupsAlert: Boolean;
  // 关闭好友管理弹框
  closeManageFriendAlert: Boolean;
};

export const INIT_STATE = {
  token: "",
  refreshToken: "",
  userID: "",
  // 用户头像
  profilePicture: "",
  username: "",
  // 在线人数
  onlineUsers: 0,
  currentComponentName: null,
  socket: {
    // 连接状态
    isConnected: false,
    // 消息内容
    message: "",
    // 重新连接错误
    reconnectError: false,
    // 心跳消息发送时间
    heartBeatInterval: 50000,
    // 心跳定时器
    heartBeatTimer: 0
  },
  // 右键菜单
  rightMenu: {
    status: "none",
    top: "0px",
    left: "0px",
    list: []
  },
  // 关闭添加好友信息弹出框
  closeFriendAllAlert: false,
  // 关闭好友验证弹出框
  closeFriendCheckedAlert: false,
  // 关闭分组管理弹框
  closeManageGroupsAlert: false,
  // 关闭好友管理弹框
  closeManageFriendAlert: false
}
