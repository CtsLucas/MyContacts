import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import useContactForm from './useContactForm';
import FomrGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    name,
    email,
    phone,
    categories,
    categoryId,
    isFormValid,
    isSubmitting,
    isLoadingCategories,
    handleSubmit,
    setCategoryId,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    getErrorMessageByFieldName,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FomrGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FomrGroup>

      <FomrGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FomrGroup>

      <FomrGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FomrGroup>

      <FomrGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}

        </Select>
      </FomrGroup>

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ContactForm;
