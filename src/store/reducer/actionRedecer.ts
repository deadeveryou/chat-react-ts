import { ModifyAction } from "../actions";
import { TYPE_CONTANTS } from "../constants";
import { StoreState, INIT_STATE } from "../index";
import { rightMenuAttribute, userInfoType } from "@/type/ComponentDataType";

// 连接打开
const SOCKET_ONOPEN = (state: StoreState = INIT_STATE, event: any) => {
  const socket = {
    ...state.socket,
    // main.config.globalProperties.$socket = event.currentTarget;
    isConnected: true,
    // 连接成功时启动定时发送心跳消息，避免被服务器断开连接
    heartBeatTimer: window.setInterval(() => {
      const message = "心跳消息";
      // state.socket.isConnected &&
      //   main.config.globalProperties.$socket.sendObj({
      //     code: 200,
      //     msg: message
      //   });
    }, state.socket.heartBeatInterval),
  };
  return {
    ...state,
    socket,
  };
};

// 连接关闭
const SOCKET_ONCLOSE = (state: StoreState = INIT_STATE, event: any) => {
  // 连接关闭时停掉心跳消息
  clearInterval(state.socket.heartBeatTimer);
  const socket = {
    ...state.socket,
    isConnected: false,
    heartBeatTimer: 0,
  };
  console.log("连接已断开: " + new Date());
  console.log(event);
  return { ...state, socket };
};
// 发生错误
const SOCKET_ONERROR = (state: StoreState = INIT_STATE, event: any) => {
  console.error(state, event);
  return state;
};
// 收到服务端发送的消息
const SOCKET_ONMESSAGE = (state: StoreState = INIT_STATE, message: string) => {
  const socket = {...state.socket, message}
  return {...state, socket};
};
// 自动重连
const SOCKET_RECONNECT = (state: StoreState = INIT_STATE, count: any) => {
  console.info("消息系统重连中...", state, count);
  return state;
};
// 重连错误
const SOCKET_RECONNECT_ERROR = (state: StoreState = INIT_STATE) => {
  const socket = {...state.socket, reconnectError:true}
  return {...state, socket};
};
// 更新用户信息
const updateUserInfo = (
  state: StoreState = INIT_STATE,
  userObj: userInfoType
) => {
  // state.token = userObj.token;
  // state.refreshToken = userObj.refreshToken;
  // state.profilePicture = userObj.profilePicture;
  // state.userID = userObj.userID;
  // state.username = userObj.username;
  localStorage.setItem("token", userObj.token);
  localStorage.setItem("profilePicture", userObj.profilePicture);
  localStorage.setItem("userID", userObj.userID);
  localStorage.setItem("username", userObj.username);
  return {...state, ...userObj};
};
// 更新组件名
const updateComponentName = (state: StoreState = INIT_STATE, route: null) => {
  return {...state, currentComponentName:route};
};
// 更新在线人数
const updateOnlineUsers = (state: StoreState = INIT_STATE, number: number) => {
  return {...state, onlineUsers:number};
};
// 更新token
const updateToken = (state: StoreState = INIT_STATE, token: string) => {
  // 更新本地存储中的token
  localStorage.setItem("token", token);
  return {...state, token};
};
// 更新右键菜单数据
const updateRightMenuStatus = (
  state: StoreState = INIT_STATE,
  menuObj: rightMenuAttribute
) => {
  // state.rightMenu.status = menuObj.status;
  // state.rightMenu.top = menuObj.top;
  // state.rightMenu.left = menuObj.left;
  // state.rightMenu.list = menuObj.list;
  return {...state,...menuObj };
};
// 更新添加好友弹出框是否存在
const updateAddFriendStatus = (
  state: StoreState = INIT_STATE,
  value: boolean
) => {
  return {...state, closeFriendAllAlert: value};
};
// 更新好友验证弹出框是否存在
const updateFriendCheckedStatus = (
  state: StoreState = INIT_STATE,
  value: boolean
) => {
  return {...state, closeFriendCheckedAlert:value};
};
// 更新分组重命名是否出现
const updateManageGroupsStatus = (
  state: StoreState = INIT_STATE,
  value: boolean
) => {
  return {...state, closeManageGroupsAlert:value};
};
// 更新分组重命名是否出现
const updateManageFriendStatus = (
  state: StoreState = INIT_STATE,
  value: boolean
) => {
  state.closeManageFriendAlert = value;
  return {...state, closeManageFriendAlert:value};
};

export const globalReducers = (
  state: StoreState = INIT_STATE,
  action: ModifyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE_CONTANTS.SOCKET_ONOPEN: {
      return SOCKET_ONOPEN(state, payload);
    }
    case TYPE_CONTANTS.SOCKET_ONCLOSE: {
      return SOCKET_ONCLOSE(state, payload);
    }
    case TYPE_CONTANTS.SOCKET_ONERROR: {
      return SOCKET_ONERROR(state, payload);
    }
    case TYPE_CONTANTS.SOCKET_ONMESSAGE: {
      return SOCKET_ONMESSAGE(state, payload);
    }
    case TYPE_CONTANTS.SOCKET_RECONNECT: {
      return SOCKET_RECONNECT(state, payload);
    }
    case TYPE_CONTANTS.SOCKET_RECONNECT_ERROR: {
      return SOCKET_RECONNECT_ERROR(state);
    }
    case TYPE_CONTANTS.updateUserInfo: {
      return updateUserInfo(state, payload);
    }
    case TYPE_CONTANTS.updateComponentName: {
      return updateComponentName(state, payload);
    }
    case TYPE_CONTANTS.updateOnlineUsers: {
      return updateOnlineUsers(state, payload);
    }
    case TYPE_CONTANTS.updateToken: {
      return updateToken(state, payload);
    }
    case TYPE_CONTANTS.updateRightMenuStatus: {
      return updateRightMenuStatus(state, payload);
    }
    case TYPE_CONTANTS.updateAddFriendStatus: {
      return updateAddFriendStatus(state, payload);
    }
    case TYPE_CONTANTS.updateFriendCheckedStatus: {
      return updateFriendCheckedStatus(state, payload);
    }
    case TYPE_CONTANTS.updateManageGroupsStatus: {
      return updateManageGroupsStatus(state, payload);
    }
    case TYPE_CONTANTS.updateManageFriendStatus: {
      return updateManageFriendStatus(state, payload);
    }
    default:
      return state;
  }
};
