"""empty message

Revision ID: 65753706fc4a
Revises: 090867f17984
Create Date: 2023-09-21 00:51:05.849316

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65753706fc4a'
down_revision = '090867f17984'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.alter_column('price',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=4, asdecimal=2),
               existing_nullable=False)

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('salt', sa.String(length=40), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('salt')
        batch_op.drop_column('name')

    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.alter_column('price',
               existing_type=sa.Float(precision=4, asdecimal=2),
               type_=sa.REAL(),
               existing_nullable=False)

    # ### end Alembic commands ###