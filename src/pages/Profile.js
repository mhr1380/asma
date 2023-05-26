import Layout from "../Layout/Layout";
import daren from "../assets/images/daren.png";
import edit from "../assets/images/search.png";
import "../Kalameh.css";
import ProfileRowItem from "../components/profile-row-item";

import Popup from "../components/popup";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { editMe } from "../http/edit-me";
import { toast } from "react-toastify";
const Profile = () => {
  const { auth, setAuth } = useAuth();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    is_professional: false,
    username: "",
  });
  const imageRef = useRef();
  useEffect(() => {
    if (auth.user) {
      setUser(auth.user);
    } else {
      // navigate("/login");
    }
  }, [auth]);

  return (
    <Layout header="پروفایل">
      {/* <Popup /> */}
      <div className="profile-body">
        <div className="profile-image-container">
          <img
            className="image"
            src={
              user?.profile_picture
                ? user.profile_picture?.name
                  ? URL.createObjectURL(user.profile_picture)
                  : `https://api.eshareh-app.ir${user.profile_picture}`
                : daren
            }
            alt="user-profile"
          />
          <div className="profile-image-container-border"></div>
          <div className="profile-image-layer"></div>
          <div className="profile-image-edit-container">
            <img
              src={edit}
              alt="edit"
              onClick={() => {
                imageRef.current.click();
              }}
            />
            <input
              type="file"
              ref={imageRef}
              style={{ display: "none" }}
              // value={user?.profile_picture}
              onChange={(e) => {
                setUser({ ...user, profile_picture: e.target.files[0] });
              }}
            />
          </div>
        </div>
        <div className="profile-details-container">
          <ProfileRowItem
            title="نام"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />
          <ProfileRowItem
            title="نام خانوادگی"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          />
          <ProfileRowItem
            title="شماره همراه"
            value={user.username}
            number
            notEditable
          />
          <ProfileRowItem
            title="نوع کاربر"
            value={user.is_professional ? "ویژه" : "عادی"}
            notEditable
          />
          <div
            className="profile-details-container-save-btn"
            onClick={async () => {
              try {
                const profileFormData = new FormData();
                profileFormData.append("first_name", user.first_name);
                profileFormData.append("last_name", user.last_name);
                if (typeof user.profile_picture === "object") {
                  if (user.profile_picture) {
                    profileFormData.append(
                      "profile_picture",
                      user.profile_picture
                    );
                  }
                }

                profileFormData.append("username", user.username);

                const { data } = await editMe(
                  auth.accessToken,
                  profileFormData
                );
                setAuth({ ...auth, user: data });
                toast.success("با موفقیت ویرایش شد . ");
              } catch (error) {
                toast.error("مشکلی پیش آمده است . لطفا بعدا امتحان کنید");
              }
            }}
          >
            ذخیره
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
