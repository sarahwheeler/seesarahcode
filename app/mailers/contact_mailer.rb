class ContactMailer < ActionMailer::Base
  default from: "contactful@seesarahcode.com"

  def contact_email(sender, message)
    @sender = sender
    @message = message
    mail(to: @admin_email, subject: 'Contacted through SSC')
  end
end
