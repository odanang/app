import SignIn from "./SignIn";
import Home from "./Home";
import User from "./User";
import Post from "./Post";
import SignUp from "./SignUp";
import NewPost from "./NewPost";
import UpdatePost from "./UpdatePost";
import FriendSuggestion from "./FriendSuggestion";
import FriendRequest from "./FriendRequest";
import UserUpdate from "./UserUpdate";
import UpdatePassword from "./UpdatePassword";
import Album from "./Album";
import EarlyAcess from "./EarlyAcess";
import Friends from "./Friends";
import Result from "./Result";
import Menu from "./Menu";
import Notification from "./Notification";
import Markdown from "./Markdown";
import Test from "./Test";

export default {
  initialRouteName: "home",
  auth: { component: SignIn, requires: ["home"] },
  screens: [
    {
      name: "home",
      component: Home,
      options: { title: "Trang chủ" },
    },
    { name: "users", component: User, options: { title: "Trang cá nhân" } },
    { name: "posts", component: Post, options: { title: "Trang bài viết" } },
    { name: "signup", component: SignUp, options: { title: "Đăng ký" } },
    {
      name: "newpost",
      component: NewPost,
      options: { title: "Tạo bài viết mới" },
    },
    {
      name: "updatepost",
      component: UpdatePost,
      options: { title: "Chỉnh sửa bài viết" },
    },
    {
      name: "friendsuggestion",
      component: FriendSuggestion,
      options: { title: "Bạn bè gợi ý" },
    },
    {
      name: "friendrequest",
      component: FriendRequest,
      options: { title: "Lời mời kết bạn" },
    },
    {
      name: "friends",
      component: Friends,
      options: { title: "Tất cả bạn bè" },
    },
    {
      name: "userupdate",
      component: UserUpdate,
      options: { title: "Chỉnh sửa trang cá nhân" },
    },
    {
      name: "updatepassword",
      component: UpdatePassword,
      options: { title: "Đổi mật khẩu" },
    },
    {
      name: "album",
      component: Album,
      options: { title: "Đã lưu" },
    },
    {
      name: "earlyaccess",
      component: EarlyAcess,
      options: { title: "Odanang - Sắp ra mắt" },
    },
    {
      name: "result",
      component: Result,
      options: { title: "Kết quả tìm kiếm" },
    },
    {
      name: "menu",
      component: Menu,
      options: { title: "Menu" },
    },
    {
      name: "notification",
      component: Notification,
      options: { title: "Notification" },
    },
    {
      name: "markdown",
      component: Markdown,
      options: { title: "Markdown" },
    },
    {
      name: "test",
      component: Test,
      options: { title: "Test Component" },
    },
  ],
  linking: {
    prefixes: ["https://odanang.net"],
    config: {
      screens: {
        home: "/",
        users: "users/:id",
        posts: "posts/:id",
        signup: "signup",
        newpost: "newpost",
        updatepost: "updatepost/:id",
        friendsuggestion: "friendsuggestion",
        friendrequest: "friendrequest",
        userupdate: "userupdate",
        updatepassword: "updatepassword",
        album: "album",
        earlyaccess: "earlyaccess",
        friends: "friends",
        result: "result",
        menu: "menu",
        notification: "notification",
        markdown: "markdown",
        test: "test",
      },
    },
  },
};
