// 定义 类型常量
export const TYPE_CONTANTS = {
  SOCKET_ONOPEN : "SOCKET_ONOPEN", // 连接打开
  SOCKET_ONCLOSE:"SOCKET_ONCLOSE", // 连接关闭 
  SOCKET_ONERROR: "SOCKET_ONERROR", // 发生错误
  SOCKET_ONMESSAGE:"SOCKET_ONMESSAGE", // 收到服务端发送的消息
  SOCKET_RECONNECT:"SOCKET_RECONNECT", // 自动重连
  SOCKET_RECONNECT_ERROR:"SOCKET_RECONNECT_ERROR", // 重连错误
  updateUserInfo: "updateUserInfo", // 更新用户信息
  updateComponentName:"updateComponentName",  // 更新组件名
  updateOnlineUsers:"updateOnlineUsers", // 更新在线人数
  updateToken:"updateToken", // 更新token
  updateRightMenuStatus:"updateRightMenuStatus", // 更新右键菜单数据
  updateAddFriendStatus:"updateAddFriendStatus", // 更新添加好友弹出框是否存在
  updateFriendCheckedStatus:"updateFriendCheckedStatus", // 更新好友验证弹出框是否存在
  updateManageGroupsStatus:"updateManageGroupsStatus", // 更新分组重命名是否出现
  updateManageFriendStatus:"updateManageFriendStatus" // 更新分组重命名是否出现
}
