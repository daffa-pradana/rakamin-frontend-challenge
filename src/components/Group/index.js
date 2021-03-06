import React from "react";
import Task from "../Task";
import {
  GroupInterval,
  GroupTitle,
  GroupTitleWrapper,
  GroupWrapper,
  GroupBtn,
  BtnIcon,
  BtnText,
  GroupTasks,
  TaskPlaceholder,
} from "./GroupComponents";

const Group = ({ group }) => {
  const { id, enum_clr, enum_interval } = group;
  const plus_icon = process.env.PUBLIC_URL + "icon/plus.svg";

  return (
    <GroupWrapper enum_clr={enum_clr}>
      <GroupTitleWrapper enum_clr={enum_clr}>
        <GroupTitle enum_clr={enum_clr}>Group {id}</GroupTitle>
      </GroupTitleWrapper>
      <GroupInterval>{enum_interval}</GroupInterval>
      <GroupTasks>
        {/* <TaskPlaceholder>
          No Task Available
        </TaskPlaceholder> */}
        <Task />
      </GroupTasks>
      <GroupBtn>
        <BtnIcon src={plus_icon} />
        <BtnText>New Task</BtnText>
      </GroupBtn>
    </GroupWrapper>
  );
};

export default Group;
