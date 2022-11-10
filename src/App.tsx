import { FC } from "react";
import { Form } from "@primitives";
import { FirstName, LastName } from "@primitives/fields";
import { Box } from "@mui/material";

const App: FC = () => {

  const handleSubmit = () => {
    console.log('I did a submit');
  }

  const formKey = 'quoteForm';

  return (
    <Box sx={{ display: 'grid', alignItems: 'center', background: '#eee', padding: '2rem', margin: '0 auto', maxWidth: '50%' }}>
      <Form
        formIndex={formKey}
        onSubmit={handleSubmit}
      >
        <FirstName />
        <LastName />
      </Form>
    </Box>
  );
};

export default App;
