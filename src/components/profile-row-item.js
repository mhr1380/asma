const ProfileRowItem = ({ title, value, number, notEditable, onChange }) => {
  return (
    <div className="profile-details-row">
      <div className="profile-details-title">{title}</div>
      <div className={`profile-details-items ${notEditable ? "disabled" : ""}`}>
        <input
          className={`profile-details-items-inner ${
            number ? "font-yekan" : ""
          } ${notEditable ? "disabled" : ""}`}
          value={value}
          disabled={notEditable}
          onChange={onChange ? onChange : () => {}}
        ></input>
      </div>
    </div>
  );
};

export default ProfileRowItem;
