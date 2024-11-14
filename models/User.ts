import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: [true, 'First name is required'],
    maxLength: [50, 'First name cannot exceed 50 characters'],
    trim: true
  },
  lastName: { 
    type: String, 
    required: [true, 'Last name is required'],
    maxLength: [50, 'Last name cannot exceed 50 characters'],
    trim: true
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters long'],
    maxLength: [100, 'Password cannot exceed 100 characters']
  },
  isActive: { 
    type: Boolean, 
    required: [true, 'Active status is required'],
    default: true
  },
  isDeleted: { 
    type: Boolean, 
    required: [true, 'Deleted status is required'],
    default: false
  },
  gender: { 
    type: String, 
    required: [true, 'Gender is required'],
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender'
    }
  },
  dateOfBirth: { 
    type: Date,
    required: [true, 'Date of birth is required'],
    validate: {
      validator: function(value: Date) {
        return value <= new Date();
      },
      message: 'Date of birth cannot be in the future'
    }
  },
  mobileNumber: { 
    type: Number, 
    required: [true, 'Mobile number is required'],
    validate: {
      validator: function(v: number) {
        return /^\d{10}$/.test(v.toString());
      },
      message: 'Mobile number must be exactly 10 digits'
    }
  },
  createdAt: { 
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: { 
    type: Date,
    required: true,
    default: Date.now
  },
  favoriteSongs: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
    validate: {
      validator: function(array: any[]) {
        return array.length <= 1000;
      },
      message: 'Cannot have more than 1000 favorite songs'
    }
  }],
  playlists: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist',
    validate: {
      validator: function(array: any[]) {
        return array.length <= 100;
      },
      message: 'Cannot have more than 100 playlists'
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});

// Add index for email for faster queries
UserSchema.index({ email: 1 });

// Add compound index for firstName and lastName
UserSchema.index({ firstName: 1, lastName: 1 });

// Pre-save middleware to update updatedAt
UserSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.User || mongoose.model('User', UserSchema); 