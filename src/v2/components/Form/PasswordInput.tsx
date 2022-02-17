import styled from '@emotion/styled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputAdornment, InputLabel, Input } from '@mui/material';
import { useState } from 'react';

interface State {
  password: string;
  showPassword: boolean;
}

interface Props {
  id: string;
  name: string;
  label: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const PasswordInput: React.FC<Props> = ({ className, id, name, label, helperText, error }) => {
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl className={className} style={{ width: '100%' }} variant="standard">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        name={name}
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        startAdornment={' '}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <HelperText error={error}>{helperText}</HelperText>
    </FormControl>
  );
};

const HelperText = styled.div<Pick<Props, 'error'>>`
  margin-top: 7px;
  height: 23px;
  font-size: 14px;
  line-height: 23px;
  color: ${({ error }) => (error ? '#FF7473' : '#518CFF')};
`;
