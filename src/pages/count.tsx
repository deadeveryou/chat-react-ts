import { userInfoType } from "@/type/ComponentDataType";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { StoreState } from "../store";
import { TYPE_CONTANTS } from "../store/constants";

// 创建类型接口
export interface IProps {
  updateUserInfo: (info: userInfoType) => void;
  value: any;
  propsvalue:any;
}

const Count: React.FC<IProps> = (props) => {
  const { value,propsvalue, updateUserInfo } = props;

  useEffect(()=>{
    console.log(value, propsvalue)
  },[value.username, propsvalue])

  const update = () => {
    updateUserInfo({
      token: "string",
      refreshToken: "string",
      userID: "string",
      profilePicture: "string",
      username: "cd"
    })
  }
  return (
    <p>
      Clicked: {JSON.stringify(value)} times
      <button onClick={update} style={{ marginRight: 20 }}>
        +
      </button>
    </p>
  );
};

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: any, props:any): { value: any, propsvalue:any } => ({
  value: state.globalReducers,
  propsvalue: props
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateUserInfo: (data: any) => dispatch(
    {
      type: TYPE_CONTANTS.updateUserInfo,
      payload: data

    }),
});

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Count);
