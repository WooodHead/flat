import React from "react";
import "./RoomSetting.less";
import { Radio } from "antd";

enum RoomSettingKey {
    CloseVideo,
    CloseAudio,
    CopyInviteInfo,
    StopVideoAndAudio,
}

export const RoomSetting = (): React.ReactElement => {
    return (
        <div className="content-container">
            <div className="header-container">
                <span>房间设置</span>
            </div>
            <div className="room-setting-inner">
                <Radio.Group>
                    <Radio value={RoomSettingKey.CloseVideo}>加入房间时关闭我的视频</Radio>
                    <Radio value={RoomSettingKey.CloseAudio}>加入房间时关闭我的音频</Radio>
                    <Radio value={RoomSettingKey.CopyInviteInfo}>创建房间时复制邀请信息</Radio>
                    <Radio value={RoomSettingKey.StopVideoAndAudio}>
                        当我的显示器关闭时，停止我的视频和音频
                    </Radio>
                </Radio.Group>
            </div>
        </div>
    );
};
