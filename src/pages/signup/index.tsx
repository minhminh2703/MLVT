import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider, Checkbox } from "@mui/material";
import LoginSignup from '../../layout/loginSignup';
import { useTheme } from '@mui/material/styles';
import GoogleLoginButton from '../../components/SocialLoginButton/GoogleLoginButton';
import FacebookLoginButton from '../../components/SocialLoginButton/FacebookLoginButton';
import axios from "axios";

const InputStyles = (theme: any) => ({
    sx: {
        '& input::placeholder': {
            fontSize: '0.9rem',
            color: theme.fontColor.gray,
        },
        borderRadius: 2.5,
    }
});

const Signup = () => {
    const theme = useTheme(); // Access the theme object

    // State hooks to capture form input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Signup handler
    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users/register', {
                first_name: firstName,
                last_name: lastName,
                username: username,
                email: email,
                password: password
            });
            console.log(response.data);
            // Redirect or show success message
        } catch (error) {
            console.error(error);
            setError("Failed to register. Please try again.");
        }
    };

    return (
        <LoginSignup>
            <Typography variant="h4" gutterBottom sx={{
                color: theme.fontColor.black,
                fontFamily: theme.typography.h1,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: 60,
                marginTop: 3,
                marginBottom: 5,
            }}>
                Get Started Now!
            </Typography>

            {/* First name Input */}
            <Typography sx={{ fontSize: 14, fontWeight: 600, marginTop: 2.5, display: 'flex', flexDirection: 'row', gap: 0.7 }}>
                First name
                <Typography sx={{ color: theme.status.failed.fontColor, fontWeight: theme.typography.fontWeightBold }}>*</Typography>
            </Typography>
            <TextField
                placeholder="Enter your first name"
                type="text"
                fullWidth
                margin="normal"
                size="small"
                required
                InputProps={InputStyles(theme)}
                sx={{ marginTop: 0.6 }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            {/* Last name Input */}
            <Typography sx={{ fontSize: 14, fontWeight: 600, marginTop: 2, display: 'flex', flexDirection: 'row', gap: 0.7 }}>
                Last name
                <Typography sx={{ color: theme.status.failed.fontColor, fontWeight: theme.typography.fontWeightBold }}>*</Typography>
            </Typography>
            <TextField
                placeholder="Enter your last name"
                type="text"
                fullWidth
                margin="normal"
                size="small"
                required
                InputProps={InputStyles(theme)}
                sx={{ marginTop: 0.6 }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            {/* Username Input */}
            <Typography sx={{ fontSize: 14, fontWeight: 600, marginTop: 2, display: 'flex', flexDirection: 'row', gap: 0.7 }}>
                Username
                <Typography sx={{ color: theme.status.failed.fontColor, fontWeight: theme.typography.fontWeightBold }}>*</Typography>
            </Typography>
            <TextField
                placeholder="Enter your username"
                type="text"
                fullWidth
                margin="normal"
                size="small"
                required
                InputProps={InputStyles(theme)}
                sx={{ marginTop: 0.6 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {/* Email Input */}
            <Typography sx={{ fontSize: 14, fontWeight: 600, marginTop: 2, display: 'flex', flexDirection: 'row', gap: 0.7 }}>
                Email address
                <Typography sx={{ color: theme.status.failed.fontColor, fontWeight: theme.typography.fontWeightBold }}>*</Typography>
            </Typography>
            <TextField
                placeholder="Enter your email"
                type="email"
                fullWidth
                margin="normal"
                size="small"
                required
                InputProps={InputStyles(theme)}
                sx={{ marginTop: 0.6 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input */}
            <Typography sx={{ fontSize: 14, fontWeight: 600, marginTop: 2, display: 'flex', flexDirection: 'row', gap: 0.7 }}>
                Password
                <Typography sx={{ color: theme.status.failed.fontColor, fontWeight: theme.typography.fontWeightBold }}>*</Typography>
            </Typography>
            <TextField
                placeholder="Enter your password"
                type="password"
                fullWidth
                margin="normal"
                size="small"
                required
                InputProps={InputStyles(theme)}
                sx={{ marginTop: 0.6 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* Confirm Password Input */}
            <Typography sx={{ fontSize: 14, fontWeight: 600, marginTop: 2, display:'flex', flexDirection:'row', gap: 0.7 }}>
                Confirm Password
                <Typography sx={{ color: theme.status.failed.fontColor, fontWeight: theme.typography.fontWeightBold }}>*</Typography>
            </Typography>
            <TextField
                placeholder="Confirm your password"
                type="password"
                fullWidth
                margin="normal"
                size="small"
                required
                InputProps={InputStyles(theme)}
                sx={{ marginTop: 0.6 }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Error Message */}
            {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}

            {/* Sign Up Button */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    marginBottom: 2,
                    marginTop: 5.5,
                    borderRadius: 2.5,
                    backgroundColor: theme.background.main,
                    fontFamily: theme.typography.h1,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: '1rem',
                    height: '2.5rem',
                    '&:hover': {
                        backgroundColor: theme.background.main,
                    },
                }}
                onClick={handleSignup}
            >
                SIGN UP
            </Button>

            {/* Divider */}
            <Divider sx={{ my: 1.5, fontFamily: theme.typography.body1, fontSize: '0.8rem' }}>Or</Divider>

            {/* Social Login Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <GoogleLoginButton />
                <FacebookLoginButton />
            </Box>

            {/* Signup Link */}
            <Box sx={{
                textTransform: 'none',
                color: theme.fontColor.gray,
                fontSize: '0.8rem',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Typography variant="body2" sx={{
                    marginTop: 3,
                    alignItems: 'center',
                    fontFamily: theme.typography.body1,
                    fontSize: '0.9rem',
                }}>
                    Have an account? <a href="/login" style={{ color: theme.status.inProgress.fontColor }}>Log in</a>
                </Typography>
            </Box>
        </LoginSignup>
    );
};

export default Signup;
