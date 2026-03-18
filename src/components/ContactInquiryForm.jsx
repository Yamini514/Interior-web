const contactFields = [
  {
    label: 'Full name',
    type: 'text',
    name: 'fullName',
    autoComplete: 'name',
    defaultValue: 'Rahul Mehta',
    placeholder: 'Your full name',
  },
  {
    label: 'Email address',
    type: 'email',
    name: 'email',
    autoComplete: 'email',
    defaultValue: 'rahul.mehta@example.com',
    placeholder: 'name@example.com',
  },
  {
    label: 'Phone number',
    type: 'tel',
    name: 'phone',
    autoComplete: 'tel',
    defaultValue: '+91 98765 43210',
    placeholder: '+91 00000 00000',
  },
]

export function ContactInquiryForm() {
  return (
    <article className="contact-inquiry-card">
      <div className="contact-inquiry-card__intro">
        <span>Required inquiry form</span>
        <h3>Book your interior design consultation</h3>
        <p>Only the essential fields are kept here.</p>
      </div>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-row">
          {contactFields.map((field) => (
            <label className="form-field" key={field.name}>
              <span>{field.label}</span>
              <input
                autoComplete={field.autoComplete}
                defaultValue={field.defaultValue}
                name={field.name}
                placeholder={field.placeholder}
                required
                type={field.type}
              />
            </label>
          ))}
        </div>

        <div className="form-row">
          <label className="form-field">
            <span>Project type</span>
            <select defaultValue="3 BHK apartment" name="projectType" required>
              <option>3 BHK apartment</option>
              <option>Villa or bungalow</option>
              <option>Retail store</option>
              <option>Office or studio</option>
            </select>
          </label>

          <label className="form-field">
            <span>Site address</span>
            <input
              defaultValue="Villa 16, Aparna Elixir, Narsingi, Hyderabad"
              name="siteAddress"
              placeholder="Project site address"
              required
              type="text"
            />
          </label>
        </div>

        <div className="form-row">
          <label className="form-field">
            <span>Budget range</span>
            <select defaultValue="INR 15L - 25L" name="budget" required>
              <option>INR 15L - 25L</option>
              <option>INR 25L - 40L</option>
              <option>INR 40L+</option>
              <option>Need guidance first</option>
            </select>
          </label>

          <label className="form-field">
            <span>Timeline</span>
            <input
              defaultValue="Within the next 30 days"
              name="timeline"
              placeholder="Expected project start"
              required
              type="text"
            />
          </label>
        </div>

        <label className="form-field">
          <span>Project details</span>
          <textarea
            defaultValue="We are planning premium interiors for a new 3 BHK apartment and need concept design, 3D views, material selection, and execution planning with a calm warm-modern style."
            name="projectDetails"
            placeholder="Share the rooms involved, style preference, and execution expectations."
            required
            rows="6"
          />
        </label>

        <div className="contact-form__footer">
          <p className="form-note">Sample values are prefilled for preview.</p>
          <button className="button button-primary" type="submit">
            Request consultation
          </button>
        </div>
      </form>
    </article>
  )
}
