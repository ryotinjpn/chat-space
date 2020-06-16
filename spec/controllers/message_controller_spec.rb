describe 'GET #index' do
  it "message view" do
    messages = create_list(:messages, 3) 
    get :index
    expect(assigns(:messages)).to match(messages)
  end

  it "renders the :index template" do
    get :index
    expect(response).to render_template :index
  end
end


describe 'GET #create' do
  it "populates an array of tweets ordered by created_at DESC" do
    tweets = create_list(:tweet, 3) 
    get :create
    expect(assigns(:tweets)).to match
  end

  it "renders the :create template" do
    get :create
    expect(response).to render_template :create
  end
end