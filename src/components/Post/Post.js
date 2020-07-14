
render() {
  const { editing, showMasterMenu } = this.state;
  const { text, date } = this.props;

  return (
    <section className="Post_parent" onClick={ this.hideMasterMenu }>

      <div className="Post_master-controls">
        <MasterControlIcon onClick={this.toggleMasterMenu } />

        <div className="Post_master-menu" style={ { display: showMasterMenu ? 'flex' : 'none' } }>
          <span onClick={ this.showEdit }>Edit</span>
          <span onClick={ () => deletePostFn( id ) }>Delete</span> {}
        </div>
      </div>

      <div className="Post_meta-data">
        <div className="Post_profile-picture">
          <ProfileIcon />
        </div>

        <span className="Post_name">DevMountain</span>
        <span className="Post_handle">@DevMountain</span>
      </div>

      <div className="Post_content">
        {
          editing
          ?
            <Edit text={ text }
                  id={ id }
                  hideEdit={ this.hideEdit } 
                  updatePostfn={ updatePostFn } />
          :
            <span className="Post_text">{ text }</span>
        }
      </div>

      <div className="Post_user-controls">
        <ReplyIcon className="Post_control-icon" />
        <FavoriteIcon className="Post_control-icon" />
        <MessageIcon className="Post_control-icon" />
      </div>
    </section>
  )
}