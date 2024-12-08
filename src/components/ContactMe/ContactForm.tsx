import { useForm, ValidationError } from '@formspree/react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
  const [state, handleSubmit] = useForm('mnnqwgwb');

  if (state.succeeded) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Alert severity="success">
          Thank you for your message! I will get back to you soon.
        </Alert>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        margin: 'auto auto 2rem auto',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="text"
      >
        Contact Me
      </Typography>
      <Typography
        className="text"
        variant="body1"
        align="center"
        gutterBottom
        sx={{ marginBottom: 3 }}
      >
        Please fill in the form below to get in touch!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              variant="outlined"
              required
            />
            <ValidationError
              prefix="First Name"
              field="firstName"
              errors={state.errors}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              variant="outlined"
              required
            />
            <ValidationError
              prefix="Last Name"
              field="lastName"
              errors={state.errors}
            />
          </Grid>

          {/* Telephone */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telephone"
              id="telephone"
              name="telephone"
              placeholder="Enter your phone number"
              variant="outlined"
              required
              type="tel"
            />
            <ValidationError
              prefix="Telephone"
              field="telephone"
              errors={state.errors}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              id="email"
              name="email"
              placeholder="Enter your email"
              variant="outlined"
              required
              type="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              id="message"
              name="message"
              placeholder="Write your message here"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                disabled={state.submitting}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactForm;
