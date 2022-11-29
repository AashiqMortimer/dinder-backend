import mongoose from 'mongoose';

function userID(){
  return Math.floor(Math.random()*9000-1000)
}

const userSchema = mongoose.Schema(
    {
        userName: {
          type: String,
          required: true,
        },
        userID: {
            type: String,
            required: true,
            unique: true,
            default: userID(),
        },
        userEmail: {
          type: String,
          required: true,
          unique: true,
        },
        userPassword: {
          type: String,
          required: true,
        }, //should be encrypted
        apiKey: {
            type: String,
            required: true, 
            default: "d3f28846148b47539eff4b6cf0e2f365"
        },
        isAdmin: {
          type: Boolean,
          required: true,
          default: false,
        },
        userPic: {
          type: String,
          required: true,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        intolerances: {
          type: String,
          required: true,
          default: "",
        },
        dietary: {
          type: String,
          required: true,
          default: "",
        },
      },
      {
        timestamps: true,
      }
    );
export default mongoose.model('users', userSchema)