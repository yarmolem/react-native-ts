import Layout from '../components/Layout'
import Form from '../components/shared/Form'
import useForm from '../hooks/useForm'

const Forms = () => {
  const { form, handleChange } = useForm({
    email: '',
    password: ''
  })

  return (
    <Layout title="Forms">
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={({ target: t }) => handleChange('email', t.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={({ target: t }) => handleChange('password', t.value)}
          />
        </div>
      </Form>

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </Layout>
  )
}

export default Forms
