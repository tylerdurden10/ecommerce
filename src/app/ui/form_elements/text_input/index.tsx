// Core
import React, { FC } from 'react';

// Styles
import Styles from './styles.module.scss';

// Interface
interface TextInputProps {
  placeholder: string;
}

export const TextInput: FC<TextInputProps> = ({ placeholder }) => (
  <input className={Styles.textInput} type='Email' placeholder={placeholder} />
);
