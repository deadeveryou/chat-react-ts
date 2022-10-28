import { TYPE_CONTANTS } from "../constants";

export interface ModifyAction {
  type: string;
  payload?: any;
}

// 连接打开
export const socketOpen = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.SOCKET_ONOPEN,
  payload,
});

// 连接关闭
export const socketClose = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.SOCKET_ONCLOSE,
  payload,
});

// 发生错误
const socketError  = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.SOCKET_ONERROR,
  payload,
});

// 收到服务端发送的消息
export const socketOnMessage = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.SOCKET_ONMESSAGE,
  payload,
});

// 自动重连
export const socketReconnect = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.SOCKET_RECONNECT,
  payload,
});

// 重连错误
export const socketReconnectError = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.SOCKET_RECONNECT_ERROR,
  payload,
});

// 更新用户信息
export const updateUserInfo = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateUserInfo,
  payload,
});

// 更新组件名
export const updateComponentName = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateComponentName,
  payload,
});

// 更新在线人数
export const updateOnlineUsers = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateOnlineUsers,
  payload,
});

// 更新token
export const updateToken = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateToken,
  payload,
});

// 更新右键菜单数据
export const updateRightMenuStatus = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateRightMenuStatus,
  payload,
});

// 更新添加好友弹出框是否存在
export const updateAddFriendStatus = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateAddFriendStatus,
  payload,
});

// 更新好友验证弹出框是否存在
export const updateFriendCheckedStatus = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateFriendCheckedStatus,
  payload,
});

// 更新分组重命名是否出现
export const updateManageGroupsStatus = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateManageGroupsStatus,
  payload,
});

// 更新分组重命名是否出现
export const updateManageFriendStatus = (payload: any): ModifyAction => ({
  type: TYPE_CONTANTS.updateManageFriendStatus,
  payload,
});
