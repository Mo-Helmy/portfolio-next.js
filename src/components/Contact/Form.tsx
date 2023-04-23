import { FormEventHandler, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';

type Props = {};

const Form = (props: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitedOnce, setIsSubmitedOnce] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    title: '',
    message: '',
  });

  const changeInputHandler = (identfier: string, value: string) => {
    setFormData((prev) => {
      return { ...prev, [identfier]: value };
    });
  };

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    setIsSubmitedOnce(true);
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      !formData.email.includes('@') ||
      formData.subject.trim() === '' ||
      formData.message.trim() === ''
    ) {
      setDialog({
        open: true,
        title: 'Failed',
        message: 'Please check red inputs again.',
      });
      return;
    }
    const data = {
      service_id: 'service_2a1dbto',
      template_id: 'template_fgeb56l',
      user_id: 'oedZnkINt4B7oA17N',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setDialog({
          open: true,
          title: 'Success',
          message: 'Email sended successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitedOnce(false);
      })
      .catch((err) =>
        setDialog({
          open: true,
          title: 'Failed',
          message: 'Something went wrong, please try again.',
        })
      );
  };

  return (
    <>
      <Stack
        component="form"
        direction="row"
        gap={2}
        flexWrap="wrap"
        onSubmit={submitHandler}
        className="animate__animated animate__backInUp"
        sx={{ animationDelay: '2s' }}
      >
        <TextField
          placeholder="Name"
          color="warning"
          sx={{
            '& input': { color: '#fff' },
            bgcolor: '#115173',
            width: 'calc(50% - 8px)',
          }}
          value={formData.name}
          onChange={(e) => changeInputHandler('name', e.target.value)}
          error={isSubmitedOnce && formData.name.trim() === ''}
          className={
            isSubmitedOnce && formData.name.trim() === ''
              ? 'animate__animated animate__shakeX'
              : ''
          }
        />
        <TextField
          placeholder="Email"
          color="warning"
          sx={{
            '& input': { color: '#fff' },
            bgcolor: '#115173',
            width: 'calc(50% - 8px)',
          }}
          value={formData.email}
          onChange={(e) => changeInputHandler('email', e.target.value)}
          error={
            isSubmitedOnce &&
            (formData.email.trim() === '' || !formData.email.includes('@'))
          }
          className={
            isSubmitedOnce &&
            (formData.email.trim() === '' || !formData.email.includes('@'))
              ? 'animate__animated animate__shakeX'
              : ''
          }
        />
        <TextField
          placeholder="Subject"
          color="warning"
          fullWidth
          sx={{ '& input': { color: '#fff' }, bgcolor: '#115173' }}
          value={formData.subject}
          onChange={(e) => changeInputHandler('subject', e.target.value)}
          error={isSubmitedOnce && formData.subject.trim() === ''}
          className={
            isSubmitedOnce && formData.subject.trim() === ''
              ? 'animate__animated animate__shakeX'
              : ''
          }
        />
        <TextField
          placeholder="Message"
          color="warning"
          fullWidth
          multiline
          rows={4}
          sx={{
            '& textarea': { color: '#fff' },
            bgcolor: '#115173',
          }}
          value={formData.message}
          onChange={(e) => changeInputHandler('message', e.target.value)}
          error={isSubmitedOnce && formData.message.trim() === ''}
          className={
            isSubmitedOnce && formData.message.trim() === ''
              ? 'animate__animated animate__shakeX'
              : ''
          }
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: '#fff',
            bgcolor: 'transparent',
            border: '1px solid #ffd700',
            '&:hover': { bgcolor: '#ffd700', color: '#000' },
          }}
        >
          Send
        </Button>
      </Stack>
      <Dialog
        open={dialog.open}
        onClose={() => setDialog((prev) => ({ ...prev, open: false }))}
      >
        <DialogTitle color={dialog.title === 'Success' ? 'green' : 'red'}>
          {dialog.title}
        </DialogTitle>
        <DialogContent sx={{ fontFamily: 'sans-serif' }}>
          {dialog.message}
        </DialogContent>
        <DialogActions>
          <Button
            color="warning"
            variant="outlined"
            onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Form;
