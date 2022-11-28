import mongoose from 'mongoose';
//import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
    {
        userName: {
          type: String,
          required: true,
        },
        userToken: {
            type: String,
            required: true,
            unique: true,
            default: "0000",
        },
        userEmail: {
          type: String,
          required: true,
          unique: true,
        },
        userPassword: {
          type: String,
          required: true,
        },
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

    //Password Encryption:

/*userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10); //The higher the value, the more secure the password.
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  //Password Decryption:
  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };*/

export default mongoose.model('users', userSchema)