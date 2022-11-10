## TestTarget

## Setup

In your component under test, import the TestHarness component and wrap the provider around your component and provide a value:

```
<TestHarness value={'statusDialog'}>
  <Dialog open={open}>
    <DialogHeader title={title} status={status} />
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button variant={'outlined'} color={'secondary'}>
        {acceptText}
      </Button>
      <Button onClick={handleClose} variant={'outlined'}>
        {cancelText}
      </Button>
    </DialogActions>
  </Dialog>
</TestHarness>
```

Your components will now be able to access the value provided here. One more step is needed. You may need to upgrade your primitives to require a name and
call the harness. In this component we want to target a handful of elements. Let's attach names to each of those:

```
<TestHarness value={'statusDialog'}>
  <Dialog open={open}>
    <DialogHeader name={'heading'} title={title} status={status} />
    <DialogContent name={'content'}>{children}</DialogContent>
    <DialogActions>
      <Button name={'accept'} variant={'outlined'} color={'secondary'}>
        {acceptText}
      </Button>
      <Button name={'cancel'} onClick={handleClose} variant={'outlined'}>
        {cancelText}
      </Button>
    </DialogActions>
  </Dialog>
</TestHarness>
```

Let's upgrade DialogHeader, all we need to do here is add a name and then pass the name to the testHarness. TestHarness will combine the context value and the name and return that value, here called id:

```
type DialogHeaderProps = {
  title: string;
  subTitle?: string;
  handleClose?: () => void;
  status?: StatusType;
  name: string;
};

export const DialogHeader: FC<DialogHeaderProps> = ({ name, title, subTitle, handleClose, status }) => {
  const id = useTestHarness(name);

  return (
    <Root id={id}>
      <div>
        <Typography color={'textPrimary'} variant={'h5'} align={'left'}>
          {title}
        </Typography>
        {subTitle && (
          <Typography color={'textSecondary'} px={6} py={1} align={'center'} variant={'body2'}>
            {subTitle}
          </Typography>
        )}
      </div>
      <StatusContainer status={status}>
        {status && <Status status={status} />}
      </StatusContainer>
      <div>
        {handleClose && (
          <IconButton
            onClick={() => handleClose()}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>
    </Root>
  );
};
```
> What if I want to apply some other strings to the ID?

TestHarness accepts as many strings as you like and will combine them in kebab style automatically. Let's upgrade button, as it should always apply `button` as part of our name

```
type ButtonProps = MuiButtonProps & {
  children: ReactNode;
  name: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  ...props
}) => {
  const id = useTestHarness(props.name, 'button');
  return (
    <MuiButton id={id} sx={{ textTransform: 'capitalize', borderRadius: '22px' }} variant={variant} {...props}>
      {children}
    </MuiButton>
  );
};
```

> what if I can't implement useTestHarness or want to test something that isn't a component

There's now a way to capture the context output without changing any code by wrapping it with HarnessTarget. It's still preferable to adjust the component if you can, but for those cases where you need to attach it to a label or what have you you can do this:

```
<TestHarness value={'statusDialog'}>
  <HarnessTarget name="bobsString">some string</HarnessTarget>
</TestHarness>
```


## Output

The output for the accept button will be: `id='statusDialog-button-accept`. You can add as many of these intermediate descriptive words as you like:

```
type ButtonProps = MuiButtonProps & {
  children: ReactNode;
  name: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  ...props
}) => {
  const id = useTestHarness(props.name, 'button', 'foo', 'bar', 'baz');
  return (
    <MuiButton id={id} sx={{ textTransform: 'capitalize', borderRadius: '22px' }} variant={variant} {...props}>
      {children}
    </MuiButton>
  );
};
```

this would yield `id='statusDialog-button-foo-bar-baz-accept`
